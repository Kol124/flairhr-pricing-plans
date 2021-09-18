import * as React from "react";
import Image from "next/image";
import { ToolTip } from "./common";

const DropDown = ({ title }: { title: string }) => (
  <ToolTip>
    <h3>{title}</h3>
    <p>Minimize HR headaches so you can get back to business.</p>
    <ul>
      <li>
        <span>
          <Image src="/check-blue.svg" alt="check" width={24} height={24} />
        </span>
        <p>Hiring and onboarding</p>
      </li>
      <li>
        <span>
          <Image src="/check-blue.svg" alt="check" width={24} height={24} />
        </span>
        <p>Employee database</p>
      </li>
      <li>
        <span>
          <Image src="/check-blue.svg" alt="check" width={24} height={24} />
        </span>
        <p>Document management</p>
      </li>
      <li>
        <span>
          <Image src="/check-blue.svg" alt="check" width={24} height={24} />
        </span>
        <p>Reporting</p>
      </li>
    </ul>
    <p>All Features</p>
  </ToolTip>
);

export default DropDown;
