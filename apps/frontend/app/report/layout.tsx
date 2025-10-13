import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OhMyYield Grant Final Report - October 2025",
  description:
    "Grant final report for OhMyYield - Milestone 3: User Testing & Feedback Gathering",
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
