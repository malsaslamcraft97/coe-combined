import type { PropsWithChildren } from "react";
import { TopBar } from "./layout/TopBar";
import { FiltersSidebar } from "./filters/FiltersSidebar";
import { CountriesTable } from "./table/CountriesTable";

function MainCardLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col w-[90%] bg-[#1B1D1F] rounded-sm mt-[-100px] z-10">
      <TopBar />

      <div className="flex flex-col lg:flex-row">
        <div className="border-r border-border">
          <FiltersSidebar />
        </div>

        <div className="flex-1">{children ?? <CountriesTable />}</div>
      </div>
    </section>
  );
}

export default MainCardLayout;
