import Head from "next/head";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  image: string;
  species: string;
  colorName: string;
  locationId: string;
};

const AddCreature = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log({ formData });
  };

  console.log({
    image: watch("image"),
    species: watch("species"),
    colorName: watch("colorName"),
    locationId: watch("locationId"),
  });

  return (
    <>
      <Head>
        <title>Dodaj nowe zwierzę</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="mb-3 text-xl font-medium text-white">
          Wprowadź dane zwierzęia
        </h1>
        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="flex w-[400px] flex-col gap-y-2"
        >
          <label className="flex flex-col">
            <span className="text-sm font-medium text-white">Gatunek</span>
            <input {...register("species")} type="text" className="input" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-white">Kolor</span>
            <input {...register("colorName")} type="text" className="input" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-white">
              Lokalizacja ośrodka hodowlanego
            </span>
            <select
              {...register("locationId")}
              className="select"
              defaultValue={1}
            >
              <option value={1}>ośrodek 1</option>
              <option value={2}>ośrodek 2</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-white">Kolor</span>
            <input
              {...register("image")}
              type="file"
              accept="image/*"
              className="file-input"
              multiple={false}
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary mt-3 w-[100px] self-center"
          >
            Wyślij
          </button>
        </form>
      </main>
    </>
  );
};

export default AddCreature;
