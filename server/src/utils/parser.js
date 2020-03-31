const parsingOrganization = orgObj => {
  const { id, name, mission, url, logoUrl } = orgObj;
  return {
    orgId: id,
    orgName: name,
    orgMission: mission,
    orgUrl: url,
    orgLogoUrl: logoUrl
  };
};

const parsingProject = projectObj => {
  const {
    id,
    title,
    summary,
    themename,
    imageLink,
    country,
    iso3116CountryCode,
    organization
  } = projectObj;
  const parsedOrgObject = parsingOrganization(organization);

  return {
    projectId: id,
    projectTitle: title,
    projectSum: summary,
    projectTheme: themename,
    projectImgLink: imageLink,
    projectCountry: country,
    projectCountryCode: iso3116CountryCode,
    projectOrg: parsedOrgObject
  };
};

const parsingListProject = projListObj => {
  const { hasNext, nextProjectId, numberFound, project } = projListObj;
  const parsedProjects = project.map(projectObj => parsingProject(projectObj));

  return {
    hasNext: hasNext || false,
    nextProjectId: hasNext ? nextProjectId : null,
    numberFound,
    projectArr: parsedProjects
  };
};

module.exports.run = resultObj => {
  if (resultObj.projects) {
    return parsingListProject(resultObj.projects);
  } else {
    return parsingProject(resultObj.project);
  }
};
