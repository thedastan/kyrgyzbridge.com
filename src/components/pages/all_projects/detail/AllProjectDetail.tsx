"use client";

import { useParams } from "next/navigation";
import { useGetProjectsQuery } from "@/redux/api/blog";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";

const AllProjectDetail = () => {
  const { data } = useGetProjectsQuery();
  const params = useParams();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const numericId = Number(id);

  const project = data?.find((el) => el.id === numericId);

  if (!project) {
    return (
      <section>
        <div className="container py-10"></div>
      </section>
    );
  }

  return (
    <section>
      <div className="container !py-20">
        <div
          className="w-full h-[400px] rounded-[24px] bg-cover bg-center mb-10"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        <Title className="text-[32px] mb-4">{project.title}</Title>

        <Description className="text-[18px]">{project.description}</Description>
      </div>
    </section>
  );
};

export default AllProjectDetail;
