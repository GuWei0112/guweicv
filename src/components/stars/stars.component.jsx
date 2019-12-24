import React from "react";
import { Stars } from "./stars.style";
export default ({ stars }) => (
  <> 
    <Stars className="fas fa-star" fill={(stars>0).toString()}></Stars>
    <Stars className="fas fa-star" fill={(stars>1).toString()}></Stars>
    <Stars className="fas fa-star" fill={(stars>2).toString()}></Stars>
    <Stars className="fas fa-star" fill={(stars>3).toString()}></Stars>
    <Stars className="fas fa-star" fill={(stars>4).toString()}></Stars>
  </>
);
