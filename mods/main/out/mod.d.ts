declare module "mods/mod" {
    import { packref, textref } from "@hazae41/stdbob";
    export function sayMyName(name: textref): packref;
}
declare module "mod" {
    export * from "mods/mod";
}
