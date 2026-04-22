import { expect, test } from "@playwright/test";

test("top page renders key sections", async ({ page }) => {
  await page.goto("/ghcpIntro/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("テクノロジー×デザイン");
  await expect(page.locator("#features")).toBeVisible();
  await expect(page.locator("#learning")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
});

test("official links exist", async ({ page }) => {
  await page.goto("/ghcpIntro/");

  const official = page.getByRole("link", { name: "公式サイト" }).first();
  await expect(official).toHaveAttribute("href", "https://kamiyama.ac.jp/");

  const admission = page.getByRole("link", { name: "入試情報" }).first();
  await expect(admission).toHaveAttribute("href", "https://kamiyama.ac.jp/admission/");
});
