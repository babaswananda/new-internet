{
    'name': 'Unified AI I/O',
    'version': '1.0',
    'summary': 'Protocol-grade launchpad for the agent economy',
    'description': """
        Unified AI I/O Protocol
        =======================
        This module provides backend functionality for the Unified AI I/O Protocol:
        - Contributor tier management
        - Agent Key system
        - Merch store integration
        - Investment offering management
    """,
    'category': 'Website',
    'author': 'The New Internet',
    'website': 'https://thenewinternet.com',
    'depends': [
        'base',
        'website',
        'website_sale',
        'website_theme_install',
        'website_builder',
        'payment',
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/contributor_tier_views.xml',
        'views/agent_key_views.xml',
        'views/merch_views.xml',
        'views/templates.xml',
        'data/contributor_tier_data.xml',
    ],
    'demo': [],
    'installable': True,
    'application': True,
    'auto_install': False,
}
