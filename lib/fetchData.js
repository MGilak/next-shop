export async function banner() {
  const res = await fetch("http://localhost:4000/bannersHeader");
  const data = await res.json();

  return data;
}

export async function grouping() {
  const res = await fetch("http://localhost:4000/grouping");
  const data = await res.json();

  return data;
}

export async function suggestions() {
  const res = await fetch("http://localhost:4000/suggestions");
  const data = await res.json();

  return data;
}

export async function headphone() {
  const res = await fetch("http://localhost:4000/headphones");
  const data = await res.json();

  return data;
}
