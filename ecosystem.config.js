module.exports = {
  apps: [{
    name: 'jt',
    script: './server/index.js',
    instances: 4,
    exec_mode: 'cluster',
    watch: false,
    autorestart: true,
    max_memory_restart: '1000M',
    max_restarts: 100,
    out_file: "./logs/out.log",
    error_file: "./logs/error.log",
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    env_development: {
      NODE_ENV: 'development',
      CHANNEL: 'jt',
      PORT: 9001
    }, 
    env : {
      NODE_ENV: 'production',
      CHANNEL: 'jt',
      PORT: 9001
    }
  }, {
    name: 'csvjt',
    script: './server/index.js',
    instances: 4,
    exec_mode: 'cluster',
    watch: false,
    autorestart: true,
    max_memory_restart: '1000M',
    max_restarts: 100,
    out_file: "./logs/out.log",
    error_file: "./logs/error.log",
    env_development: {
      NODE_ENV: 'development',
      CHANNEL: 'csvjt',
      PORT: 9002
    }, 
    env: {
      NODE_ENV: 'production',
      CHANNEL: 'csvjt',
      PORT: 9002
    }
  }]
}