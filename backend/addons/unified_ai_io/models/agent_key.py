from odoo import models, fields, api
import uuid

class AgentKey(models.Model):
    _name = 'unified.agent.key'
    _description = 'Agent Key'
    
    name = fields.Char('Key Name', required=True)
    key_id = fields.Char('Key ID', default=lambda self: str(uuid.uuid4()), readonly=True)
    partner_id = fields.Many2one('res.partner', string='Owner', required=True)
    tier_id = fields.Many2one('unified.contributor.tier', string='Tier')
    issue_date = fields.Datetime('Issue Date', default=fields.Datetime.now, readonly=True)
    expiry_date = fields.Datetime('Expiry Date')
    state = fields.Selection([
        ('draft', 'Draft'),
        ('active', 'Active'),
        ('expired', 'Expired'),
        ('revoked', 'Revoked')
    ], string='Status', default='draft')
    
    # Permissions and capabilities
    can_mint_endpoints = fields.Boolean('Can Mint Endpoints', default=False)
    has_governance_access = fields.Boolean('Has Governance Access', default=False)
    has_dev_forum_access = fields.Boolean('Has Dev Forum Access', default=False)
    
    # NFT and blockchain related fields
    nft_id = fields.Char('NFT ID')
    blockchain_address = fields.Char('Blockchain Address')
    
    _sql_constraints = [
        ('key_id_unique', 'unique(key_id)', 'Agent Key ID must be unique!')
    ]
    
    @api.model
    def create(self, vals):
        """Override create to set permissions based on tier"""
        res = super(AgentKey, self).create(vals)
        if res.tier_id:
            res.can_mint_endpoints = res.tier_id.endpoint_mint_rights
            res.has_governance_access = res.tier_id.governance_preview
            res.has_dev_forum_access = res.tier_id.private_dev_forum or res.tier_id.dev_channel
        return res
    
    def action_activate(self):
        """Activate the agent key"""
        for key in self:
            key.state = 'active'
    
    def action_revoke(self):
        """Revoke the agent key"""
        for key in self:
            key.state = 'revoked'
