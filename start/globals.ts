import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as phIcons } from '@iconify-json/ph'
import edge from 'edge.js'

// To use iconify, you have to nstall the edge-iconify and then the @iconify-json/ph
// In this section we use ph icon, but you can install other icon. by changing /ph to /your icon name
// you can check on this page https://edgejs.dev/docs/edge-iconify#finding-and-installing-icon-bundles

addCollection(phIcons)

edge.use(edgeIconify)
