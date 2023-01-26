import { useState } from "react";
import convertB1toB0 from "b1-to-b0-convertor";

import * as S from "./styles";

function B1toB0Page() {
  const [b1, setB1] = useState("");
  const [b0, setB0] = useState("");

  function handleConvert() {
    if (!b1) return setB0("");
    let b0_result = convertB1toB0(b1) as string;
    setB0(b0_result);
  }

  return (
    <S.Container>
      <S.Form>
        <S.Input
          placeholder="B1"
          value={b1}
          onChange={(e) => setB1(e.target.value)}
        />
        <S.Button onClick={handleConvert}>=</S.Button>
        <S.Input placeholder="B0" value={b0} />
      </S.Form>
    </S.Container>
  );
}

export default B1toB0Page;
