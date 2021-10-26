var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/getPlayers.ts
__export(exports, {
  handler: () => handler
});
var handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ id: 1, name: "Test Player", email: "test@test.com" })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=getPlayers.js.map
