'use client'
import React, { useEffect, useState } from "react";
import FipeSearch from "./fipe-search";

interface FipeData {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export default function Widget() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fipeData, setFipeData] = useState<FipeData | null>(null);

  useEffect(() => {
    const steps = document.querySelectorAll(".bg-card");
    const nextButtons = document.querySelectorAll('button[type="button"]');

    nextButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        steps[index].classList.add("hidden");
        steps[index + 1].classList.remove("hidden");
        setCurrentStep(index + 2); // Update the current step
      });
    });
  }, []);

  const progressBarWidth = ((currentStep - 1) / 4) * 100; // Calculate the width of the progress bar

  return (
    <>
      <div className="mx-auto flex h-full min-h-screen max-w-[800px] flex-col items-center justify-center p-4 pt-6 md:p-6 lg:p-12">
        <div className="mb-4 h-2.5 w-full justify-self-start rounded-full bg-gray-200">
          <div
            className="h-2.5 rounded-full bg-primary"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        <div className="m-9 grid h-auto w-full grow">
          <div className="rounded-lg bg-card p-4">
            <h2 className="mb-2 text-lg font-bold">Step 1: User Information</h2>
            <form>
              <label className="mb-2 block">
                <input
                  type="text"
                  className="block w-full rounded border p-2 pl-10"
                  placeholder="CPF"
                />
              </label>
              <FipeSearch onFipeData={setFipeData} />
              <button
                type="button"
                className="w-full rounded-lg bg-primary p-2 text-white"
              >
                Next
              </button>
            </form>
          </div>
          <div className="hidden rounded-lg bg-card p-4">
            <h2 className="mb-2 text-lg font-bold">Step 2: Coverage Options</h2>
            <form>
              <label className="mb-2 block">
                <span className="text-sm">Third-Party Liability:</span>
                <select className="block w-full p-2 pl-10 text-sm text-zinc-700">
                  <option value="">Select an option</option>
                  <option value="basic">Basic</option>
                  <option value="extended">Extended</option>
                </select>
              </label>
              <label className="mb-2 block">
                <span className="text-sm">Comprehensive Coverage:</span>
                <select className="block w-full p-2 pl-10 text-sm text-zinc-700">
                  <option value="">Select an option</option>
                  <option value="basic">Basic</option>
                  <option value="extended">Extended</option>
                </select>
              </label>
              <button
                type="button"
                className="w-full rounded-lg bg-primary p-2 text-white"
              >
                Next
              </button>
            </form>
          </div>
          <div className="hidden rounded-lg bg-card p-4">
            <h2 className="mb-2 text-lg font-bold">
              Step 3: Additional Features
            </h2>
            <form>
              <label className="mb-2 block">
                <span className="text-sm">Roadside Assistance:</span>
                <input type="checkbox" className="mr-2" />
              </label>
              <label className="mb-2 block">
                <span className="text-sm">Theft Protection:</span>
                <input type="checkbox" className="mr-2" />
              </label>
              <button
                type="button"
                className="w-full rounded-lg bg-primary p-2 text-white"
              >
                Next
              </button>
            </form>
          </div>
          <div className="hidden rounded-lg bg-card p-4">
            <h2 className="mb-2 text-lg font-bold">
              Step 4: Review and Submit
            </h2>
            <form>
              <p className="text-sm">
                Review your information and coverage options:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  CPF: <span className="font-bold">000.000.000-00</span>
                </li>
                <li>
                  Placa do Carro: <span className="font-bold">ABC-1234</span>
                </li>
                <li>
                  Coverage Options:{" "}
                  <span className="font-bold">
                    Third-Party Liability: Basic, Comprehensive Coverage:
                    Extended
                  </span>
                </li>
                <li>
                  Additional Features:{" "}
                  <span className="font-bold">
                    Roadside Assistance, Theft Protection
                  </span>
                </li>
              </ul>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary p-2 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}