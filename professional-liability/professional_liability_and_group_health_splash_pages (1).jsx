import React, { useMemo, useState } from "react";
import {
  Briefcase,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const pageThemes = {
  pli: {
    key: "pli",
    title: "Professional Liability Insurance",
    intro:
      "Professional liability coverage helps protect dentists and dental practices from the financial impact of claims related to patient care. Having the right coverage in place can support both peace of mind and long-term practice stability.",
    expertise:
      "Alliant works with dental professionals to evaluate exposures, compare carrier options, and structure coverage aligned to real-world practice needs. As a full-service broker, Alliant helps ADA members make informed decisions with confidence.",
    highlights: [
      "Support for dentists and practice owners",
      "Guidance on coverage needs and structure",
      "Broker expertise across carrier options",
    ],
    icon: Briefcase,
    formTitle: "Learn more about professional liability coverage",
    cta: "Request information",
  },
  health: {
    key: "health",
    title: "Group Health Insurance",
    intro:
      "Group health insurance can help dental practices attract and retain talent while supporting the wellbeing of their team. Selecting the right plan requires balancing cost, coverage, and administrative simplicity.",
    expertise:
      "Alliant helps employers evaluate plan structures, compare market options, and design benefits strategies aligned to their practice goals. ADA members can leverage Alliant’s brokerage expertise to find the right fit.",
    highlights: [
      "Support for employer-sponsored plans",
      "Guidance for small and growing practices",
      "Broker-led review of available options",
    ],
    icon: HeartPulse,
    formTitle: "Learn more about group health insurance",
    cta: "Connect with Alliant",
  },
};

function LeadForm({ variant }) {
  const isHealth = variant === "health";

  return (
    <Card className="rounded-[28px] border border-slate-200 bg-white shadow-xl">
      <CardContent className="p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
          {pageThemes[variant].formTitle}
        </h2>

        <form className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="Jane" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="jane@practice.com" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input type="tel" placeholder="(555) 555-5555" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Practice Name</Label>
              <Input placeholder="Bright Smile Dental" />
            </div>
            <div className="space-y-2">
              <Label>State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="il">Illinois</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>{isHealth ? "Number of Employees" : "Practice Type"}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1–5</SelectItem>
                  <SelectItem value="2">6–10</SelectItem>
                  <SelectItem value="3">11–25</SelectItem>
                  <SelectItem value="4">26+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Coverage Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shopping">Shopping</SelectItem>
                  <SelectItem value="existing">Have coverage</SelectItem>
                  <SelectItem value="new">Need new coverage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Additional Details</Label>
            <Textarea placeholder="Tell us more about your needs" />
          </div>

          <Button className="rounded-full bg-[#0F2D52] px-6 py-6 text-sm font-semibold text-white hover:bg-[#143a67]">
            {pageThemes[variant].cta}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function ContentSection({ variant }) {
  const theme = pageThemes[variant];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          {theme.title}
        </h1>
      </div>

      <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Why this coverage matters
          </h2>
          <p className="text-slate-600 leading-7">{theme.intro}</p>
        </CardContent>
      </Card>

      <Card className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Why Alliant
          </h2>
          <p className="text-slate-600 leading-7 mb-5">{theme.expertise}</p>

          <div className="space-y-3">
            {theme.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0F2D52] mt-1" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SimplifiedSplashPages() {
  const [activePage, setActivePage] = useState("pli");
  const current = useMemo(() => pageThemes[activePage], [activePage]);

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-8">
        <div className="flex gap-3 mb-6">
          <Button
            onClick={() => setActivePage("pli")}
            className={`rounded-full px-5 py-5 text-sm font-semibold ${
              activePage === "pli"
                ? "bg-[#0F2D52] text-white"
                : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            Professional Liability
          </Button>
          <Button
            onClick={() => setActivePage("health")}
            className={`rounded-full px-5 py-5 text-sm font-semibold ${
              activePage === "health"
                ? "bg-[#0F2D52] text-white"
                : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            Group Health
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <LeadForm variant={activePage} />
          <ContentSection variant={activePage} />
        </div>
      </div>
    </div>
  );
}
