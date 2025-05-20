from odoo import models, fields, api

class MerchProduct(models.Model):
    _name = 'unified.merch.product'
    _description = 'AI Made Me Rich Merch'
    _inherit = ['product.template']
    
    is_merch = fields.Boolean('Is Merch Product', default=True)
    merch_type = fields.Selection([
        ('tshirt', 'T-Shirt'),
        ('hoodie', 'Hoodie'),
        ('poster', 'Poster'),
        ('decal', 'Laptop Decal'),
        ('other', 'Other')
    ], string='Merch Type', default='tshirt')
    
    nft_required = fields.Boolean('NFT Required', help='Whether an NFT is required to purchase this item')
    tier_required = fields.Many2one('unified.contributor.tier', string='Tier Required')
    limited_edition = fields.Boolean('Limited Edition')
    max_quantity = fields.Integer('Maximum Quantity', help='For limited edition items')
    sold_quantity = fields.Integer('Sold Quantity', default=0)
    
    @api.depends('max_quantity', 'sold_quantity')
    def _compute_available_quantity(self):
        for product in self:
            if product.limited_edition:
                product.available_quantity = max(0, product.max_quantity - product.sold_quantity)
            else:
                product.available_quantity = 999999  # Unlimited
    
    available_quantity = fields.Integer(compute='_compute_available_quantity', string='Available Quantity')
    
    def action_add_to_cart(self):
        """Add this merch to cart"""
        self.ensure_one()
        return {
            'type': 'ir.actions.act_url',
            'url': f'/shop/cart/update?product_id={self.id}&add_qty=1',
            'target': 'self',
        }
