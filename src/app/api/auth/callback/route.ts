import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const registerResponse = await api.post("/register", {
    code,
  });

  const { token } = registerResponse.data;
  const redirectURL = new URL("/", request.url);
  const cookieExpiresinSeconds = 60 * 60 * 24 * 30;

  // redirecionando o user para a home
  return NextResponse.redirect(redirectURL, {
    // salvando o token nos cookies
    headers: {
      "Set-cookie": `token=${token}; Path=/; max-age=${cookieExpiresinSeconds}`,
    },
  });
}
