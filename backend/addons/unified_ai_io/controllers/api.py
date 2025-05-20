from odoo import http
from odoo.http import request
import json

class UnifiedAIAPI(http.Controller):
    
    @http.route('/api/unified/tiers', type='json', auth='public')
    def get_tiers(self, **kw):
        """API endpoint to get contributor tiers"""
        tiers = request.env['unified.contributor.tier'].sudo().search([('active', '=', True)])
        result = []
        for tier in tiers:
            result.append({
                'id': tier.id,
                'name': tier.name,
                'price': tier.price,
                'description': tier.description,
                'benefits': tier.benefits,
                'available_slots': tier.available_slots,
                'max_slots': tier.max_slots,
            })
        return result
    
    @http.route('/api/unified/merch', type='json', auth='public')
    def get_merch(self, **kw):
        """API endpoint to get merch products"""
        products = request.env['unified.merch.product'].sudo().search([('is_merch', '=', True)])
        result = []
        for product in products:
            result.append({
                'id': product.id,
                'name': product.name,
                'price': product.list_price,
                'description': product.description_sale,
                'image_url': f'/web/image/unified.merch.product/{product.id}/image_1024',
                'merch_type': product.merch_type,
                'available_quantity': product.available_quantity,
                'limited_edition': product.limited_edition,
            })
        return result
    
    @http.route('/api/unified/register', type='json', auth='public', csrf=False)
    def register_contributor(self, **kw):
        """API endpoint to register a contributor"""
        tier_id = kw.get('tier_id')
        name = kw.get('name')
        email = kw.get('email')
        wallet_address = kw.get('wallet_address')
        
        if not all([tier_id, name, email]):
            return {'success': False, 'error': 'Missing required fields'}
        
        tier = request.env['unified.contributor.tier'].sudo().browse(int(tier_id))
        if not tier.exists() or tier.available_slots <= 0:
            return {'success': False, 'error': 'Tier not available'}
        
        # Create or find partner
        partner = request.env['res.partner'].sudo().search([('email', '=', email)], limit=1)
        if not partner:
            partner = request.env['res.partner'].sudo().create({
                'name': name,
                'email': email,
            })
        
        # Create agent key
        agent_key = request.env['unified.agent.key'].sudo().create({
            'name': f"{tier.name} Key for {name}",
            'partner_id': partner.id,
            'tier_id': tier.id,
            'blockchain_address': wallet_address,
            'state': 'draft',
        })
        
        # Update tier slots
        tier.write({'filled_slots': tier.filled_slots + 1})
        
        return {
            'success': True,
            'key_id': agent_key.key_id,
            'message': f'Successfully registered for {tier.name} tier'
        }
