import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
