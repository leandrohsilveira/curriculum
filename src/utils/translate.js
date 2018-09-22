function isResourceLoaded(i18n, resource) {
  const data = i18n.store.data[i18n.language];
  if (Array.isArray(resource)) {
    return !!data && !!resource.filter(res => !!data[res]).length;
  }
  return !!data && !!data[resource];
}

export { isResourceLoaded };
