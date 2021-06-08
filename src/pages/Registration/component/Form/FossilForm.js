import React, { useEffect, useState } from "react";
import SelectInput from "../../../../components/General/SelectInput";

export const Form = ({ register, type, useDefault }) => {
  const options = [
    { value: "dinasour", label: "Үлэг гүрвэл" },
    { value: "bird", label: "Шувуу" },
    { value: "mammalia", label: "Хөхтөн" },
    { value: "turtle", label: "Яст мэлхий" },
    { value: "fish", label: "Загас" },
    { value: "plant", label: "Ургамал" },
    { value: "insect", label: "Шавж" },
    { value: "egg", label: "Өндөг" },
  ];

  return (
    <div className="columns">
      <div className="column">
        <div className="field">
          <label className="label">Цуглуулгын дугаар</label>
          <div className="control">
            <input
              {...register("catalog_no")}
              className="input is-small"
              type="text"
              placeholder="catalog_no"
            />
          </div>
        </div>
        <div className="field" style={{ marginBottom: "38px" }}>
          <label className="label">Хувийн дугаар</label>
          <div className="control">
            <input
              {...register("accession_no")}
              className="input is-small"
              type="text"
              placeholder="accession_no"
            />
          </div>
        </div>
        <div className="columns" style={{ border: "1px solid gray" }}>
          <div className="field column">
            <label className="label">Дээд баг</label>
            <div className="control">
              {/* <SelectInput register={register} registername="branch_name" /> */}
              <div className="select">
                <select {...register("branch_name")}>
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field column">
            <label className="label">Зүйл</label>
            <div className="control">
              <SelectInput register={register} registername="species" />
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Түгээмэл нэршил</label>
          <div className="control">
            <input
              {...register("common_name")}
              className="input is-small"
              type="text"
              placeholder="common_name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Таксономийн дугаар</label>
          <div className="control">
            <input
              {...register("TSN")}
              className="input is-small"
              type="text"
              placeholder="TSN"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Олдсон аймаг</label>
          <div className="control">
            <input
              {...register("province")}
              className="input is-small"
              type="text"
              placeholder="Province"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Олдсон сум</label>
          <div className="control">
            <input
              {...register("sum")}
              className="input is-small"
              type="text"
              placeholder="Locality"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Олдворт газар</label>
          <div className="control">
            <input
              {...register("locality")}
              className="input is-small"
              type="text"
              placeholder="Locality"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">UTM байршил</label>
          <div className="control">
            <input
              {...register("UTM")}
              className="input is-small"
              type="text"
              placeholder="UTM"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Өргөрөг градус</label>
          <div className="control">
            <input
              {...register("meridian.latitude_degree")}
              className="input is-small"
              type="text"
              placeholder="Latitude_degree"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Өргөрөг минут</label>
          <div className="control">
            <input
              {...register("meridian.latitude_minutes")}
              className="input is-small"
              type="text"
              placeholder="Latitude_minutes"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Өргөрөг секунд</label>
          <div className="control">
            <input
              {...register("meridian.latitude_seconds")}
              className="input is-small"
              type="text"
              placeholder="Latitude_seconds"
            />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Уртраг градус</label>
          <div className="control">
            <input
              {...register("meridian.longitude_degree")}
              className="input is-small"
              type="text"
              placeholder="Longitude_degree"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Уртраг минут</label>
          <div className="control">
            <input
              {...register("meridian.longitude_minutes")}
              className="input is-small"
              type="text"
              placeholder="Longitude_minutes"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Уртраг секунд</label>
          <div className="control">
            <input
              {...register("meridian.longitude_seconds")}
              className="input is-small"
              type="text"
              placeholder="Longitude_seconds"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Далайн төвшнөөс дээш / метр</label>
          <div className="control">
            <input
              {...register("elevation")}
              className="input is-small"
              type="text"
              placeholder="Elevation"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Гүн /өнгөн давхаргаас доош / метр</label>
          <div className="control">
            <input
              {...register("depth")}
              className="input is-small"
              type="text"
              placeholder="Depth"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хадгалагдсан орчны мэдээлэл</label>
          <div className="control">
            <input
              {...register("depos_environ")}
              className="input is-small"
              type="text"
              placeholder="Depos_environ"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Литологи</label>
          <div className="control">
            <input
              {...register("lithology")}
              className="input is-small"
              type="text"
              placeholder="Lithology"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Давхаргын зүсэлт</label>
          <div className="control">
            <input
              {...register("vertical_datum")}
              className="input is-small"
              type="text"
              placeholder="Vertical_datum"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Давхарга/ Стратиграфи</label>
          <div className="control">
            <input
              {...register("datum")}
              className="input is-small"
              type="text"
              placeholder="Datum"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Зөөвөрлөгдсөн эсэх</label>
          <div className="control">
            <input
              {...register("in_situ_float")}
              className="input is-small"
              type="text"
              placeholder="In_situ_float"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Биохоризон</label>
          <div className="control">
            <input
              {...register("horizon")}
              className="input is-small"
              type="text"
              placeholder="Horizon"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Тафономи</label>
          <div className="control">
            <input
              {...register("taphonomy")}
              className="input is-small"
              type="text"
              placeholder="Taphonomy"
            />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Галав</label>
          <div className="control">
            <input
              {...register("period_system")}
              className="input is-small"
              type="text"
              placeholder="Period_system"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Галчин</label>
          <div className="control">
            <input
              {...register("epoch_series")}
              className="input is-small"
              type="text"
              placeholder="Epoch_series"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Нас/ Үе шат</label>
          <div className="control">
            <input
              {...register("age_stage")}
              className="input is-small"
              type="text"
              placeholder="Age_stage"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Формаци</label>
          <div className="control">
            <input
              {...register("formation")}
              className="input is-small"
              type="text"
              placeholder="Formation"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Гишүүн</label>
          <div className="control">
            <input
              {...register("member")}
              className="input is-small"
              type="text"
              placeholder="Member"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Олдворын төрөл</label>
          <div className="control">
            <input
              {...register("type_specimen")}
              className="input is-small"
              type="text"
              placeholder="Type_specimen"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Харьцуулах олдвор</label>
          <div className="control">
            <input
              {...register("figured_specimen")}
              className="input is-small"
              type="text"
              placeholder="Figured_specimen"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Тодорхойлсон</label>
          <div className="control">
            <input
              {...register("identified_by")}
              className="input is-small"
              type="text"
              placeholder="Identified_by"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Тодорхойлсон огноо</label>
          <div className="control">
            <input
              {...register("ident_date")}
              className="input is-small"
              type="text"
              placeholder="Ident_date"
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Судалсан судлаач </label>
          <div className="control">
            <input
              {...register("study_no")}
              className="input is-small"
              type="text"
              placeholder="Study_no"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хэвлэгдсэн</label>
          <div className="control">
            <input
              {...register("published")}
              className="input is-small"
              type="text"
              placeholder="Published"
            />
          </div>
        </div>
        <div className="field">
          <label className="label"> Тодорхойлолт</label>
          <div className="control">
            <input
              {...register("description")}
              className="input is-small"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
