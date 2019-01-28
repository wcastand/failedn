import { NextStatelessComponent } from "next";
import { Parent, Test } from "werwtyukjytreawaresrdhfjgkhmfdsadafdgfhjjkngnfdfsadafgh";

const banana: Test = "banana";
const tititti: Parent = { banana };

const Index: NextStatelessComponent<{}> = () => (
  <div>
    Hello world {banana} {tititti.banana}
  </div>
);
export default Index;
