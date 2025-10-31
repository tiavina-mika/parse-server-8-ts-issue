import './functions';

Parse.Cloud.beforeSave('Article', async (request: Parse.Cloud.BeforeSaveRequest) => {
  const article = request.object;
  if (!article.get('title')) {
    throw new Error('Le champ "title" est requis pour Article.');
  }
});

// Parse.Cloud.define('hello', async (request: Parse.Cloud.FunctionRequest) => {
//   return 'Hello ' + request.params.name + '!';
// });
