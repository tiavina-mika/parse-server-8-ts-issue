Parse.Cloud.define("getArticle", async (request: Parse.Cloud.FunctionRequest) => {
  const articleId = request.params.articleId;
  const query = new Parse.Query("Article");
    const article = await query.get(articleId, { useMasterKey: true });
  return article;
});