"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { TimeToRead } from "./time-to-read";

export default function SiteFooter() {
 
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-6 space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <ModeToggle />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Made by{" "}
                <Link
                  href="https://x.com/Pintu1012kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  Pintu
                </Link>
              </span>
            
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground">
            
            <TimeToRead />
          </div>
        </div>
      </div>
    </footer>
  );
}
