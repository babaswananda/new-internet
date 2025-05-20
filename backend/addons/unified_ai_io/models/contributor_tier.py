from odoo import models, fields, api

class ContributorTier(models.Model):
    _name = 'unified.contributor.tier'
    _description = 'Contributor Tier'
    _order = 'price asc'

    name = fields.Char('Tier Name', required=True)
    price = fields.Float('Price', required=True)
    description = fields.Text('Description')
    benefits = fields.Text('Benefits')
    max_slots = fields.Integer('Maximum Slots', default=33)
    filled_slots = fields.Integer('Filled Slots', default=0)
    active = fields.Boolean('Active', default=True)
    
    # Benefits as boolean fields for easier filtering
    protocol_badge = fields.Boolean('Protocol Badge', default=True)
    community_access = fields.Boolean('Community Access', default=True)
    agent_key = fields.Boolean('Agent Key')
    dev_channel = fields.Boolean('Dev Channel')
    endpoint_mint_rights = fields.Boolean('Endpoint Mint Rights')
    private_dev_forum = fields.Boolean('Private Dev Forum')
    founding_ledger = fields.Boolean('Founding Ledger')
    governance_preview = fields.Boolean('Governance Preview')
    
    # NFT and token related fields
    nft_template_id = fields.Char('NFT Template ID')
    token_allocation = fields.Float('Token Allocation')
    vesting_period = fields.Selection([
        ('none', 'No Vesting'),
        ('6_months', '6 Months'),
        ('12_months', '12 Months')
    ], string='Vesting Period', default='none')
    
    @api.depends('max_slots', 'filled_slots')
    def _compute_available_slots(self):
        for tier in self:
            tier.available_slots = tier.max_slots - tier.filled_slots
    
    available_slots = fields.Integer(compute='_compute_available_slots', string='Available Slots')
    
    def action_register_contributor(self):
        """Action to register a new contributor to this tier"""
        self.ensure_one()
        if self.available_slots <= 0:
            return {
                'type': 'ir.actions.client',
                'tag': 'display_notification',
                'params': {
                    'title': 'No Available Slots',
                    'message': f'The {self.name} tier has no available slots.',
                    'type': 'warning',
                }
            }
        return {
            'name': f'Register for {self.name}',
            'type': 'ir.actions.act_window',
            'res_model': 'unified.contributor.registration.wizard',
            'view_mode': 'form',
            'target': 'new',
            'context': {'default_tier_id': self.id},
        }
