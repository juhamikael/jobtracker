import { NextResponse, NextRequest } from "next/server";
import {
  allJobsById,
  postNewJob,
  updateApplyStatus,
  updateCompany,
  updateHref,
  updatePublishedAt,
  updateTitle,
  deleteJob,
} from "@/db/index";
import type { TUpdateData } from "@/types/dataType";
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  const jobs = await allJobsById({
    id: parseInt(id as string),
  });

  return new Response(JSON.stringify(jobs), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const params = {
    title: body.title,
    href: body.href,
    company: body.company,
    publishedAt: body.publishedAt,
    endsAt: body.endsAt,
    applyStatus: body.applyStatus,
    userId: body.userId,
  };

  postNewJob({ params: params });
  return new Response(JSON.stringify({ message: "Job posted" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function PUT(request: NextRequest) {
  const {
    id,
    applyStatus,
    title,
    href,
    target,
    company,
  }: Partial<TUpdateData> = await request.json();

  if (!target) {
    return new Response(JSON.stringify({ message: "No target" }), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  if (target === "applyStatus") {
    updateApplyStatus({
      id: id as number,
      applyStatus: applyStatus as boolean,
    });
  }

  if (target === "title") {
    updateTitle({ id: id as number, title: title as string });
  }

  if (target === "company") {
    updateCompany({ id: id as number, company: company as string });
  }

  if (target === "href") {
    updateHref({ id: id as number, href: href as string });
  }

  // if (target === "publishedAt") {
  //   updatePublishedAt({ id: id as number, publishedAt: publishedAt as Date });
  // }

  // if (target === "endsAt") {
  //   updateEndsAt({ id: id as number, endsAt: endsAt as Date });
  // }

  return new Response(JSON.stringify({ message: "Job updated" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "No id" }), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  deleteJob({ id: id as number });

  return new Response(JSON.stringify({ message: "Job deleted" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
