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
          <label className="label">Хэмжээ/ Жин</label>
          <div className="control">
            <input
              {...register("dimens_weight")}
              className="input is-small"
              type="text"
              placeholder="catalog_no"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Иж бүрдлийн тоо</label>
          <div className="control">
            <input
              {...register("item_count")}
              className="input is-small"
              type="text"
              placeholder="accession_no"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Тоо ширхэг</label>
          <div className="control">
            <input
              {...register("quantity")}
              className="input is-small"
              type="text"
              placeholder="common_name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">
            Сан хөмрөгийн нэгж / хадгалагдаж байгаа хайрцагны тоо ширхэг
          </label>
          <div className="control">
            <input
              {...register("storage_unit")}
              className="input is-small"
              type="text"
              placeholder="TSN"
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
          <label className="label">Хадгалалтын байдал</label>
          <div className="control">
            <input
              {...register("condition")}
              className="input is-small"
              type="text"
              placeholder="Province"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Сан хөмрөгийн байршил</label>
          <div className="control">
            <input
              {...register("location")}
              className="input is-small"
              type="text"
              placeholder="Epoch_series"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Ашиглалтын байдал</label>
          <div className="control">
            <input
              {...register("object_status")}
              className="input is-small"
              type="text"
              placeholder="Age_stage"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Огноо</label>
          <div className="control">
            <input
              {...register("status_date")}
              className="input is-small"
              type="text"
              placeholder="Formation"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Цуглуулгын фолдер</label>
          <div className="control">
            <input
              {...register("catalog_folder")}
              className="input is-small"
              type="text"
              placeholder="Member"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хадгалалтын бичиглэл</label>
          <div className="control">
            <textarea
              style={{ maxWidth: "500px" }}
              {...register("condition_desc")}
              className="input is-small"
              type="text"
              placeholder="Locality"
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
          <label className="label">Олдворын шилжилт/ хаанаас хаашаа</label>
          <div className="control">
            <input
              {...register("movement")}
              className="input is-small"
              type="text"
              placeholder="Locality"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Түр шилжүүлсэн зорилго</label>
          <div className="control">
            <input
              {...register("temp_movement_goal")}
              className="input is-small"
              type="text"
              placeholder="UTM"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Түр шилжүүлсэн огноо</label>
          <div className="control">
            <input
              {...register("temp_movement_date")}
              className="input is-small"
              type="text"
              placeholder="Latitude_degree"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Буцаан хүлээн авсан огноо</label>
          <div className="control">
            <input
              {...register("received_back_date")}
              className="input is-small"
              type="text"
              placeholder="Latitude_minutes"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Хүлээлцэх үеийн бүрэн, бүтэн байдал</label>
          <div className="control">
            <textarea
              style={{ maxWidth: "500px" }}
              {...register("recieved_integrity")}
              className="input is-small"
              type="text"
              placeholder="Latitude_seconds"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Соёлын өвийн зэрэглэл</label>
          <div className="control">
            <input
              {...register("ctrl_prop")}
              className="input is-small"
              type="text"
              placeholder="Period_system"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
