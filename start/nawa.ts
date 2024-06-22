import edge from 'edge.js'

// node ace make:preload nama-file => to create preload file that will be executed on boot process

// To share global state, can be a variable or a function
edge.global('nawa', 'Mathius loves Yamakawa Sakura')
edge.global('getTimestamp', () => Date.now())
