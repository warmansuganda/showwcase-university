/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemedStyledFunction } from "styled-components";

export const withProps =
  <U>() =>
  // @ts-ignore
  <P, T, O>(fn: ThemedStyledFunction<P, T, O>) =>
    // @ts-ignore
    fn as unknown as ThemedStyledFunction<P & U, T, O & U>;
