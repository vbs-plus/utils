// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
const msgPath = process.env.GIT_PARAMS;
const msg = fs.readFileSync(msgPath, "utf-8").trim();
const commitRE = /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(init|feat|fix|docs|style|refactor|perf|test|build|cli|chore)(\(.+\))?: .{1,50}/;
if (!commitRE.test(msg)) {
  console.log("\n⚠️ 日志不符合规范, 格式如下(表情、模块选填): \n");
  console.log("🎉 init(模块): 项目初始化");
  console.log("✨ feat(模块): 添加新特性");
  console.log("🐞 fix(模块): 修复 bug");
  console.log("📃 docs(模块): 仅仅修改文档");
  console.log("🌈 style(模块): 仅仅修改了空格、格式缩进、逗号等等, 不改变代码逻辑");
  console.log("🦄 refactor(模块): 代码重构, 没有加新功能或者修复bug");
  console.log("🎈 perf(模块): 优化相关, 比如提升性能、体验");
  console.log("🧪 test(模块): 增加测试用例");
  console.log("🔧 build(模块): 依赖相关的内容");
  console.log("🐎 ci(模块): cli配置相关 例如对 k8s、docker的配置文件的修改");
  console.log("🐳 chore(模块): 改变构建流程、或者增加依赖库、工具等");
  process.exit(1);
}
