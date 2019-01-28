import { Parent, Test } from "@scope/common";
import { NextStatelessComponent } from "next";

const banana: Test = "banana";
const tititti: Parent = { banana };

const Index: NextStatelessComponent<{}> = () => (
  <div>
    Hello world {banana} {tititti.banana}
  </div>
);
export default Index;
