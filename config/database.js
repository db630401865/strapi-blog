// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        //主机所在地址
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        //服务器mysql的名称是blog
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'dongbo'),
        password: env('DATABASE_PASSWORD', 'Dongbo1992'),
      },
      options: {},
    },
  },
});