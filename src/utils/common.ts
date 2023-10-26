export async function sleep(millisecond: number): Promise<void> {
  return await new Promise((resolve) => setTimeout(resolve, millisecond));
}
