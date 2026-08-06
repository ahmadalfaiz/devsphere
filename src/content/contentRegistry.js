import htmlgettingStarted from "./html/htmlgettingStarted";
import htmlFundamentals from "./html/htmlFundamentals";
import linksImagesMedia from "./html/linksImagesMedia";
import listsAndTables from "./html/listsAndTables";
import pageLayoutStructure from "./html/pageLayoutStructure";
import htmlForms from "./html/htmlForms";
import semanticHtml from "./html/semanticHtml";
import responsiveHtml from "./html/responsiveHtml";
import graphicsVisualContent from "./html/graphicsVisualContent";
import htmlApis from "./html/htmlApis";
import accessibilityAndSeo from "./html/accessibilityAndSeo";
import htmlReferences from "./html/htmlReferences";
import htmlRealProjects from "./html/htmlRealProjects";
import htmlInterviewPreparation from "./html/htmlInterviewPreparation";
import htmlConclusion from "./html/htmlConclusion";

import cssGettingStarted from "./css/cssGettingStarted";
import cssFundamentals from "./css/cssFundamentals";
import cssWorkingWithText from "./css/cssWorkingWithText";
import cssDisplayAndPositioning from "./css/cssDisplayAndPositioning";
import cssTablesFormsNavigation from "./css/cssTablesFormsNavigation";
import cssAdvancedSelectors from "./css/cssAdvancedSelectors";
import cssModernLayoutSystems from "./css/cssModernLayoutSystems";
import cssResponsiveWebDesign from "./css/cssResponsiveWebDesign";
import cssAnimationAndEffects from "./css/cssAnimationAndEffects";
import cssAdvancedCss from "./css/cssAdvancedCss";
import cssArchitecture from "./css/cssArchitecture";
import cssPreprocessors from "./css/cssPreprocessors";
import cssRealProjects from "./css/cssRealProjects";
import cssInterviewPreparation from "./css/cssInterviewPreparation";
import cssConclusion from "./css/cssConclusion";

import gettingStarted from "./react/gettingStarted";
import reactFundamentals from "./react/reactFundamentals";
import formsAndUserInput from "./react/formsAndUserInput";
import stylingReactApps from "./react/stylingReactApps";
import reactHooks from "./react/reactHooks";
import componentCommunication from "./react/componentCommunication";
import routing from "./react/routing";
import workingWithAPIs from "./react/workingWithAPIs";
import advancedReactConcepts from "./react/advancedReactConcepts";
import stateManagement from "./react/stateManagement";
import performanceOptimization from "./react/performanceOptimization";
import authenticationAndAuthorization from "./react/authenticationAndAuthorization";
import reactPlusBackend from "./react/reactPlusBackend";
import testing from "./react/testing";
import deployment from "./react/deployment";
import realProjects from "./react/realProjects";
import interviewPreparation from "./react/interviewPreparation";
import conclusion from "./react/conclusion";

import nextjsGettingStarted from "./nextjs/nextjsGettingStarted";
import nextjsFundamentals from "./nextjs/nextjsFundamentals";
import nextjsAppRouterEssentials from "./nextjs/nextjsAppRouterEssentials";
import nextjsRouting from "./nextjs/nextjsRouting";
import nextjsStylingNextjsApplications from "./nextjs/nextjsStylingNextjsApplications";
import nextjsImagesFontsStaticAssets from "./nextjs/nextjsImagesFontsStaticAssets";
import nextjsRenderingStrategies from "./nextjs/nextjsRenderingStrategies";
import nextjsDataFetching from "./nextjs/nextjsDataFetching";
import nextjsServerActionsMutations from "./nextjs/nextjsServerActionsMutations";
import nextjsApisBackendDevelopment from "./nextjs/nextjsApisBackendDevelopment";
import nextjsAuthenticationAuthorization from "./nextjs/nextjsAuthenticationAuthorization";

import nodejsIntroductionToNodejs from "./nodejs/nodejsIntroductionToNodejs";
import nodejsJavaScriptEssentialsNodejs from "./nodejs/nodejsJavaScriptEssentialsNodejs";
import nodejsNpmProjectManagement from "./nodejs/nodejsNpmProjectManagement";
import nodejsCoreModules from "./nodejs/nodejsCoreModules";
import nodejsFileSystem from "./nodejs/nodejsFileSystem";
import nodejsAsynchronousProgramming from "./nodejs/nodejsAsynchronousProgramming";
import nodejsEventsStreams from "./nodejs/nodejsEventsStreams";
import nodejsHttpServer from "./nodejs/nodejsHttpServer";

import expressjsIntroduction from "./expressjs/expressjsIntroduction";
import expressjsRouting from "./expressjs/expressjsRouting";
import expressjsMiddleware from "./expressjs/expressjsMiddleware";
import expressjsRequestResponse from "./expressjs/expressjsRequestResponse";
import expressjsServingContent from "./expressjs/expressjsServingContent";
import expressjsTemplateEngines from "./expressjs/expressjsTemplateEngines";
import expressjsRestApiDevelopment from "./expressjs/expressjsRestApiDevelopment";
import expressjsWorkingDatabases from "./expressjs/expressjsWorkingDatabases";
import expressjsAuthenticationAuthorization from "./expressjs/expressjsAuthenticationAuthorization";

/*import industryInsights from "./react/resources/industryInsights";
import bestPractices from "./react/resources/bestPractices";*/

const contentRegistry = {

  html: {
    ...htmlgettingStarted,
    ...htmlFundamentals,
    ...linksImagesMedia,
    ...listsAndTables,
    ...pageLayoutStructure,
    ...htmlForms,
    ...semanticHtml,
    ...responsiveHtml,
    ...graphicsVisualContent,
    ...htmlApis,
    ...accessibilityAndSeo,
    ...htmlReferences,
    ...htmlRealProjects,
    ...htmlInterviewPreparation,
    ...htmlConclusion,
  },

  css: {
    ...cssGettingStarted,
    ...cssFundamentals,
    ...cssWorkingWithText,
    ...cssDisplayAndPositioning,
    ...cssTablesFormsNavigation,
    ...cssAdvancedSelectors,
    ...cssModernLayoutSystems,
    ...cssResponsiveWebDesign,
    ...cssAnimationAndEffects,
    ...cssAdvancedCss,
    ...cssArchitecture,
    ...cssPreprocessors,
    ...cssRealProjects,
    ...cssInterviewPreparation,
    ...cssConclusion,
  },

  react: {
    ...gettingStarted,
    ...reactFundamentals,
    ...formsAndUserInput,
    ...stylingReactApps,
    ...reactHooks,
    ...componentCommunication,
    ...routing,
    ...workingWithAPIs,
    ...advancedReactConcepts,
    ...stateManagement,
    ...performanceOptimization,
    ...authenticationAndAuthorization,
    ...reactPlusBackend,
    ...testing,
    ...deployment,
    ...realProjects,
    ...interviewPreparation,
    ...conclusion,
  },

  nextjs: {
    ...nextjsGettingStarted,
    ...nextjsFundamentals,
    ...nextjsAppRouterEssentials,
    ...nextjsRouting,
    ...nextjsStylingNextjsApplications,
    ...nextjsImagesFontsStaticAssets,
    ...nextjsRenderingStrategies,
    ...nextjsDataFetching,
    ...nextjsServerActionsMutations,
    ...nextjsApisBackendDevelopment,
    ...nextjsAuthenticationAuthorization,
  },

  nodejs: {
    ...nodejsIntroductionToNodejs,
    ...nodejsJavaScriptEssentialsNodejs,
    ...nodejsNpmProjectManagement,
    ...nodejsCoreModules,
    ...nodejsFileSystem,
    ...nodejsAsynchronousProgramming,
    ...nodejsEventsStreams,
    ...nodejsHttpServer,
  },

  expressjs: {
    ...expressjsIntroduction,
    ...expressjsRouting,
    ...expressjsMiddleware,
    ...expressjsRequestResponse,
    ...expressjsServingContent,
    ...expressjsTemplateEngines,
    ...expressjsRestApiDevelopment,
    ...expressjsWorkingDatabases,
    ...expressjsAuthenticationAuthorization,
  },

};

export default contentRegistry;