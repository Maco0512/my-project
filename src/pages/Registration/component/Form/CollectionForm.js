import React, { useEffect, useState } from "react";
import SelectInput from "../../../../components/General/SelectInput";

export const Form = ({ register }) => {
  return (
    <div className="columns">
      <div className="column">
        <div
          className="field"
          style={{
            marginBottom: "0px",
          }}
        >
          <label className="label">Цуглуулгын дугаар</label>
          <div className="control">
            <SelectInput register={register} registername="catalog_no" />
          </div>
        </div>

        <div className="field">
          <label className="label">Цуглуулсан</label>
          <div className="control">
            <input
              {...register("collector")}
              className="input is-small"
              type="text"
              placeholder="Цуглуулсан"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хээрийн дугаар</label>
          <div className="control">
            <input
              {...register("field_no")}
              className="input is-small"
              type="text"
              placeholder="Хээрийн дугаар"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Цуглуулсан огноо</label>
          <div className="control">
            <input
              {...register("collection_date")}
              className="input is-small"
              type="text"
              placeholder="Цуглуулсан огноо"
            />
          </div>
        </div>
      </div>

      <div
        className="column"
        style={{
          marginTop: "8px",
        }}
      >
        <div className="field ">
          <label className="label">Сэргээн засварласан огноо</label>
          <div className="control">
            <input
              {...register("maint_cycle_date")}
              className="input is-small"
              type="text"
              placeholder="Сэргээн засварласан огноо"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хүлээлгэн өгсөн этгээд</label>
          <div className="control">
            <input
              {...register("eminent_figure")}
              className="input is-small"
              type="text"
              placeholder="Хүлээлгэн өгсөн этгээд"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хүлээлгэн өгсөн байгууллага</label>
          <div className="control">
            <input
              {...register("eminent_org")}
              className="input is-small"
              type="text"
              placeholder="Хүлээлгэн өгсөн байгууллага"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Бусад дугаар </label>
          <div className="control">
            <input
              {...register("other_numbers")}
              className="input is-small"
              type="text"
              placeholder="Бусад дугаар"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Бүртгэсэн</label>
          <div className="control">
            <input
              {...register("cataloger")}
              className="input is-small"
              type="text"
              placeholder="Бүртгэсэн"
            />
          </div>
        </div>
      </div>

      <div
        className="column"
        style={{
          marginTop: "8px",
        }}
      >
        <div className="field">
          <label className="label">Бүртгэсэн огноо</label>
          <div className="control">
            <input
              placeholder="Бүртгэсэн огноо"
              {...register("catalog_date")}
              className="input is-small"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хуулбарласан аргачлал</label>
          <div className="control">
            <input
              placeholder="Хуулбарласан аргачлал"
              {...register("repro_method")}
              className="input is-small"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хуулбарласан огноо</label>
          <div className="control">
            <input
              placeholder="Хуулбарласан огноо"
              {...register("repro_date")}
              className="input is-small"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хуулбарласан нэгж</label>
          <div className="control">
            <input
              {...register("unit")}
              className="input is-small"
              type="text"
              placeholder="Хуулбарласан нэгж"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Лавлах өгөгдлийн сан</label>
          <div className="control">
            <input
              {...register("reference_datum")}
              className="input is-small"
              type="text"
              placeholder="Лавлах өгөгдлийн сан"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
