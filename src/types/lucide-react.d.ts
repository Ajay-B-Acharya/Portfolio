declare module "lucide-react" {
  import { FC, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
  }

  export const Download: FC<IconProps>;
  export const ArrowUpRight: FC<IconProps>;
}
