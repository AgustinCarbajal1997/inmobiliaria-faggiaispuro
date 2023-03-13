import config from "../config";
export const postNewPublication = async (
  dataPublication,
  imageFront,
  images,
  location,
  locationHeader
) => {
  try {
    const res = await fetch("/api/realestate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        ...dataPublication,
        location,
        locationHeader,
        bedrooms: parseInt(dataPublication.bedrooms),
        bathrooms: parseInt(dataPublication.bathrooms),
        imageFront: [imageFront],
        images: [...images],
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const putPublication = async (dataPublication, id, slug) => {
  try {
    const res = await fetch(`/api/realestate/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify({
        ...dataPublication,
        bedrooms: parseInt(dataPublication.bedrooms),
        bathrooms: parseInt(dataPublication.bathrooms),
      }),
    });
    await fetch(`/api/revalidateProperty/${slug}?secret=${config.revalidate}`);
    await fetch(`/api/revalidateHighlighted?secret=${config.revalidate}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletePublication = async (id, slug) => {
  try {
    const res = await fetch(`/api/realestate/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
    });
    await fetch(`/api/revalidateProperty/${slug}?secret=${config.revalidate}`);
    await fetch(`/api/revalidateHighlighted?secret=${config.revalidate}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postMessage = async (dataMessage) => {
  try {
    const res = await fetch("/api/message", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        ...dataMessage,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postLocality = async (dataLocality) => {
  try {
    const res = await fetch("/api/locality", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        ...dataLocality,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const puttLocality = async (zone, id, operation) => {
  try {
    const res = await fetch("/api/locality", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify({
        operation,
        zone,
        id,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteLocality = async (id) => {
  try {
    const res = await fetch("/api/locality", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postFilter = async (dataFilter) => {
  try {
    const res = await fetch("/api/filterproperties", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        ...dataFilter,
        bedrooms: parseInt(dataFilter.bedrooms),
        bathrooms: parseInt(dataFilter.bathrooms),
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const setHighlighted = async (id) => {
  try {
    const res = await fetch(`/api/sethighlight/${id}`);
    const revalidate = await fetch(
      `/api/revalidateHighlighted?secret=${config.revalidate}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const setReviewed = async (id) => {
  try {
    const res = await fetch(`/api/setreviewed/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const couldInterest = async () => {
  try {
    const res = await fetch(`/api/couldinterest`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
