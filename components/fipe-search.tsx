"use client"
import React, { useState, useEffect } from "react";

interface Brand {
  codigo: string;
  nome: string;
}

interface Model {
  codigo: number;
  nome: string;
}

interface Year {
  codigo: string;
  nome: string;
}

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

interface FipeSearchProps {
  onFipeData: (data: FipeData | null) => void;
}

const FipeSearch: React.FC<FipeSearchProps> = ({ onFipeData }) => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [fipeData, setFipeData] = useState<FipeData | null>(null);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos`)
        .then((response) => response.json())
        .then((data) => setModels(data.modelos));
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos`)
        .then((response) => response.json())
        .then((data) => setYears(data));
    }else{
      setYears([])
    }
  }, [selectedBrand, selectedModel]);

  useEffect(() => {
    if (selectedYear) {
      fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedYear}`)
        .then((response) => response.json())
        .then((data) => {
          setFipeData(data);
          onFipeData(data);
        });
    }else{
      setFipeData(null);
      onFipeData(null);
    }
  }, [onFipeData, selectedBrand, selectedModel, selectedYear]);

  return (
    <div className="space-y-4">
      <div>
        <select
          className="w-full rounded border p-2"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Selecione uma marca</option>
          {brands.map((brand) => (
            <option key={brand.codigo} value={brand.codigo}>
              {brand.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="w-full rounded border p-2"
          value={selectedModel ?? ""}
          onChange={(e) => setSelectedModel(Number(e.target.value))}
        >
          <option value="">Selecione um modelo</option>
          {models.map((model) => (
            <option key={model.codigo} value={model.codigo}>
              {model.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="w-full rounded border p-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Selecione um ano</option>
          {years.map((year) => (
            <option key={year.codigo} value={year.codigo}>
              {year.nome}
            </option>
          ))}
        </select>
      </div>
      {fipeData && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Dados FIPE:</h3>
          <p>Valor: {fipeData.Valor}</p>
          <p>Marca: {fipeData.Marca}</p>
          <p>Modelo: {fipeData.Modelo}</p>
        </div>
      )}
    </div>
  );
};

export default FipeSearch;