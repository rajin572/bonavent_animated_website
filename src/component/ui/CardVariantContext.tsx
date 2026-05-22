"use client";

import { createContext, useContext } from "react";

export type CardVariant = "light" | "dark";

export const CardVariantContext = createContext<CardVariant>("light");

export const useCardVariant = () => useContext(CardVariantContext);
