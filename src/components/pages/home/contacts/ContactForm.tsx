// components/ContactForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button/Button";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  agreement: boolean;
}

interface FetchDataPro extends IFormInput {
  id: number;
}

interface ContactFormProps {
  onSubmissionSuccess?: (data: FetchDataPro) => void;
}

export const ContactForm = ({ onSubmissionSuccess }: ContactFormProps) => {
  const t = useTranslations("Contacts");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post<FetchDataPro>(
        "https://api.kyrgyz-bridge.com/ru/callback/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onSubmissionSuccess?.(response.data);
      reset();
      alert("Сообщение отправлено!");
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Ошибка при отправке формы!");
    }
  };

  return (
    <div className="w-full md:h-[417px] bg-white border rounded-[24px] md:p-6 p-3 flex md:flex-col items-center gap-[42px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        {/* Имя */}
        <div>
          <input
            {...register("name", { required: "Имя обязательно" })}
            type="text"
            placeholder={t("name")}
            className="w-full p-4 rounded-[16px] bg-[#F5F5F5] outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email", {
              required: "Email обязателен",
            })}
            type="email"
            placeholder={t("email")}
            className="w-full p-4 rounded-[16px] bg-[#F5F5F5] outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Сообщение */}
        <div>
          <textarea
            {...register("message", {
              required: "Сообщение обязательно",
            })}
            placeholder={t("message")}
            className="w-full p-4 rounded-[16px] resize-none  bg-[#F5F5F5] outline-none h-32"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Чекбокс */}
        <div className="flex items-center gap-2">
          <input
            {...register("agreement", {
              required: "Необходимо согласие",
            })}
            type="checkbox"
            className="w-4 h-4 cursor-pointer"
          />
          <p className="text-gray-600 text-sm">{t("checkbox")}</p>
        </div>
        {errors.agreement && (
          <p className="text-red-500 text-sm">{errors.agreement.message}</p>
        )}

        {/* Кнопка */}
        <Button
          type="submit"
          className="bg-orange-500 text-white py-3 rounded-lg border-none"
        >
          {t("send")}
        </Button>
      </form>
    </div>
  );
};
