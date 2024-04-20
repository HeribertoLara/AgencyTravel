"use client";
import Header from "../Header/Header";
import { useState } from "react";
import Menu from "../Menu/Menu";
import BodyEn from "../BodyEn/BodyEn";

export default function Main(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <BodyEn />
    </>
  );
}
