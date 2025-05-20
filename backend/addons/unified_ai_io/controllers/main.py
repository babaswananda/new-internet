from odoo import http
from odoo.http import request

class UnifiedAIController(http.Controller):
    
    @http.route('/unified/tiers', type='http', auth='public', website=True)
    def contributor_tiers(self, **kw):
        """Display contributor tiers"""
        tiers = request.env['unified.contributor.tier'].sudo().search([('active', '=', True)])
        return request.render('unified_ai_io.contributor_tiers_template', {
            'tiers': tiers
        })
    
    @http.route('/unified/register/<int:tier_id>', type='http', auth='public', website=True)
    def register_tier(self, tier_id, **kw):
        """Register for a specific tier"""
        tier = request.env['unified.contributor.tier'].sudo().browse(tier_id)
        if not tier.exists() or tier.available_slots <= 0:
            return request.redirect('/unified/tiers')
        
        return request.render('unified_ai_io.tier_registration_template', {
            'tier': tier
        })
    
    @http.route('/unified/merch', type='http', auth='public', website=True)
    def merch_store(self, **kw):
        """AI Made Me Rich merch store"""
        products = request.env['unified.merch.product'].sudo().search([('is_merch', '=', True)])
        return request.render('unified_ai_io.merch_store_template', {
            'products': products
        })
    
    @http.route('/unified/agent-keys', type='http', auth='user', website=True)
    def agent_keys(self, **kw):
        """Display user's agent keys"""
        partner = request.env.user.partner_id
        keys = request.env['unified.agent.key'].sudo().search([('partner_id', '=', partner.id)])
        return request.render('unified_ai_io.agent_keys_template', {
            'keys': keys
        })
