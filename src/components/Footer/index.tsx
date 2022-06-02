import Divider from "src/components/Divider";
import Text from "src/components/Text";

import { Wrapper, Content } from "./FooterStyles";

function Footer() {
  return (
    <Wrapper>
      <Divider />
      <Content>
        Made with <Text variant="primary">❤</Text> by Warman Suganda
      </Content>
    </Wrapper>
  );
}

export default Footer;
