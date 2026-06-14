import gettingStarted from "./react/gettingStarted";
import reactFundamentals from "./react/reactFundamentals";
import formsAndUserInput from "./react/formsAndUserInput";
import stylingReactApps from "./react/stylingReactApps";
import reactHooks from "./react/reactHooks";
import componentCommunication from "./react/componentCommunication";
import routing from "./react/routing";
import workingWithAPIs from "./react/workingWithAPIs";
import advancedReactConcepts from "./react/advancedReactConcepts";

/*import industryInsights from "./react/resources/industryInsights";
import bestPractices from "./react/resources/bestPractices";*/

const contentRegistry = {

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

    /*"introduction-to-react":
      reactIntroduction,

    "jsx-fundamentals":
      reactJSX,*/

    /*"industry-insights":
      industryInsights,

    "best-practices":
      bestPractices,*/

  },

};

export default contentRegistry;