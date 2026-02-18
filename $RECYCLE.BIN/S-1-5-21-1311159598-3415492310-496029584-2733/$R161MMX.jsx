import React, { useState, useEffect, useEffectEvent } from "react";
import { currencyConverter } from "../APIs/api";
import currencies from "../APIs/Currencies.json";

export const Demo = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    fromAmount: "USD",
    toAmount: "INR",
    convertedAmount: null,
  });

  // 🔥 Effect Event (always has latest state)
  const convertCurrency = useEffectEvent(async () => {
    if (Number(amount) <= 0) return;

    setLoading(true);
    setError(null);

    try {
      const res = await currencyConverter(
        form.fromAmount,
        form.toAmount,
        Number(amount)
      );

      const { conversion_result } = res.data;

      setForm((prev) => ({
        ...prev,
        convertedAmount: conversion_result,
      }));
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  });

  // 🔥 Auto convert when form is valid
  useEffect(() => {
    if (Number(amount) > 0) {
      convertCurrency();
    } else {
      // reset result if invalid
      setForm((prev) => ({
        ...prev,
        convertedAmount: null,
      }));
    }
  }, [amount, form.fromAmount, form.toAmount]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-7">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-black mb-6">Currency Converter</h2>

        <div className="space-y-5">
          {/* Amount */}
          <input
            value={amount}
            min={1}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="0.00"
            className="w-full bg-slate-50 border rounded-xl p-3"
          />

          {/* From */}
          <select
            value={form.fromAmount}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                fromAmount: e.target.value,
              }))
            }
            className="w-full bg-slate-50 border rounded-xl p-3"
          >
            {currencies.map((currency, index) => (
              <option value={currency.currency} key={index}>
                {currency.currencyName}
              </option>
            ))}
          </select>

          {/* To */}
          <select
            value={form.toAmount}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                toAmount: e.target.value,
              }))
            }
            className="w-full bg-slate-50 border rounded-xl p-3"
          >
            {currencies.map((currency, index) => (
              <option value={currency.currency} key={index}>
                {currency.currencyName}
              </option>
            ))}
          </select>

          {/* Loading */}
          {loading && (
            <p className="text-center text-indigo-600">Converting...</p>
          )}

          {/* Result */}
          {form.convertedAmount !== null && !loading && (
            <div className="mt-5 text-center">
              {amount} {form.fromAmount} = {form.convertedAmount}{" "}
              {form.toAmount}
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
