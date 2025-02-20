import {
  StepContext_default,
  StepperContext_default
} from "./chunk-6WHTRUWY.js";
import {
  ButtonBase_default
} from "./chunk-IXBJEBKJ.js";
import {
  useSlot
} from "./chunk-67FIQDGF.js";
import {
  isMuiElement_default
} from "./chunk-OLBYAMCX.js";
import {
  SvgIcon_default,
  createSvgIcon
} from "./chunk-GPR4UZKU.js";
import {
  memoTheme_default
} from "./chunk-TMSHV4XL.js";
import {
  useDefaultProps
} from "./chunk-CWDTHKFO.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_prop_types,
  styled_default
} from "./chunk-CGN65F54.js";
import {
  require_jsx_runtime
} from "./chunk-AULMV57C.js";
import {
  require_react
} from "./chunk-RVMO727X.js";
import {
  __toESM
} from "./chunk-WOOG5QLI.js";

// node_modules/@mui/material/StepButton/StepButton.js
var React5 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/material/StepLabel/StepLabel.js
var import_prop_types2 = __toESM(require_prop_types());
var React4 = __toESM(require_react());

// node_modules/@mui/material/StepIcon/StepIcon.js
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/internal/svg-icons/CheckCircle.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var CheckCircle_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), "CheckCircle");

// node_modules/@mui/material/internal/svg-icons/Warning.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Warning_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), "Warning");

// node_modules/@mui/material/StepIcon/stepIconClasses.js
function getStepIconUtilityClass(slot) {
  return generateUtilityClass("MuiStepIcon", slot);
}
var stepIconClasses = generateUtilityClasses("MuiStepIcon", ["root", "active", "completed", "error", "text"]);
var stepIconClasses_default = stepIconClasses;

// node_modules/@mui/material/StepIcon/StepIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _circle;
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ["root", active && "active", completed && "completed", error && "error"],
    text: ["text"]
  };
  return composeClasses(slots, getStepIconUtilityClass, classes);
};
var StepIconRoot = styled_default(SvgIcon_default, {
  name: "MuiStepIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme_default(({
  theme
}) => ({
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${stepIconClasses_default.completed}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses_default.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
var StepIconText = styled_default("text", {
  name: "MuiStepIcon",
  slot: "Text",
  overridesResolver: (props, styles) => styles.text
})(memoTheme_default(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
})));
var StepIcon = React3.forwardRef(function StepIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepIcon"
  });
  const {
    active = false,
    className: classNameProp,
    completed = false,
    error = false,
    icon,
    ...other
  } = props;
  const ownerState = {
    ...props,
    active,
    completed,
    error
  };
  const classes = useUtilityClasses(ownerState);
  if (typeof icon === "number" || typeof icon === "string") {
    const className = clsx_default(classNameProp, classes.root);
    if (error) {
      return (0, import_jsx_runtime3.jsx)(StepIconRoot, {
        as: Warning_default,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    if (completed) {
      return (0, import_jsx_runtime3.jsx)(StepIconRoot, {
        as: CheckCircle_default,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    return (0, import_jsx_runtime3.jsxs)(StepIconRoot, {
      className,
      ref,
      ownerState,
      ...other,
      children: [_circle || (_circle = (0, import_jsx_runtime3.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), (0, import_jsx_runtime3.jsx)(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState,
        children: icon
      })]
    });
  }
  return icon;
});
true ? StepIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Whether this step is active.
   * @default false
   */
  active: import_prop_types.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: import_prop_types.default.bool,
  /**
   * If `true`, the step is marked as failed.
   * @default false
   */
  error: import_prop_types.default.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var StepIcon_default = StepIcon;

// node_modules/@mui/material/StepLabel/stepLabelClasses.js
function getStepLabelUtilityClass(slot) {
  return generateUtilityClass("MuiStepLabel", slot);
}
var stepLabelClasses = generateUtilityClasses("MuiStepLabel", ["root", "horizontal", "vertical", "label", "active", "completed", "error", "disabled", "iconContainer", "alternativeLabel", "labelContainer"]);
var stepLabelClasses_default = stepLabelClasses;

// node_modules/@mui/material/StepLabel/StepLabel.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    orientation,
    active,
    completed,
    error,
    disabled,
    alternativeLabel
  } = ownerState;
  const slots = {
    root: ["root", orientation, error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    label: ["label", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    iconContainer: ["iconContainer", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    labelContainer: ["labelContainer", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepLabelUtilityClass, classes);
};
var StepLabelRoot = styled_default("span", {
  name: "MuiStepLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation]];
  }
})({
  display: "flex",
  alignItems: "center",
  [`&.${stepLabelClasses_default.alternativeLabel}`]: {
    flexDirection: "column"
  },
  [`&.${stepLabelClasses_default.disabled}`]: {
    cursor: "default"
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      textAlign: "left",
      padding: "8px 0"
    }
  }]
});
var StepLabelLabel = styled_default("span", {
  name: "MuiStepLabel",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${stepLabelClasses_default.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses_default.completed}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses_default.alternativeLabel}`]: {
    marginTop: 16
  },
  [`&.${stepLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
var StepLabelIconContainer = styled_default("span", {
  name: "MuiStepLabel",
  slot: "IconContainer",
  overridesResolver: (props, styles) => styles.iconContainer
})({
  flexShrink: 0,
  display: "flex",
  paddingRight: 8,
  [`&.${stepLabelClasses_default.alternativeLabel}`]: {
    paddingRight: 0
  }
});
var StepLabelLabelContainer = styled_default("span", {
  name: "MuiStepLabel",
  slot: "LabelContainer",
  overridesResolver: (props, styles) => styles.labelContainer
})(memoTheme_default(({
  theme
}) => ({
  width: "100%",
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${stepLabelClasses_default.alternativeLabel}`]: {
    textAlign: "center"
  }
})));
var StepLabel = React4.forwardRef(function StepLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepLabel"
  });
  const {
    children,
    className,
    componentsProps = {},
    error = false,
    icon: iconProp,
    optional,
    slots = {},
    slotProps = {},
    StepIconComponent: StepIconComponentProp,
    StepIconProps,
    ...other
  } = props;
  const {
    alternativeLabel,
    orientation
  } = React4.useContext(StepperContext_default);
  const {
    active,
    disabled,
    completed,
    icon: iconContext
  } = React4.useContext(StepContext_default);
  const icon = iconProp || iconContext;
  let StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon_default;
  }
  const ownerState = {
    ...props,
    active,
    alternativeLabel,
    completed,
    disabled,
    error,
    orientation
  };
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      stepIcon: StepIconProps,
      ...componentsProps,
      ...slotProps
    }
  };
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: StepLabelLabel,
    externalForwardedProps,
    ownerState
  });
  const [StepIconSlot, stepIconProps] = useSlot("stepIcon", {
    elementType: StepIconComponent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime4.jsxs)(StepLabelRoot, {
    className: clsx_default(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: [icon || StepIconSlot ? (0, import_jsx_runtime4.jsx)(StepLabelIconContainer, {
      className: classes.iconContainer,
      ownerState,
      children: (0, import_jsx_runtime4.jsx)(StepIconSlot, {
        completed,
        active,
        error,
        icon,
        ...stepIconProps
      })
    }) : null, (0, import_jsx_runtime4.jsxs)(StepLabelLabelContainer, {
      className: classes.labelContainer,
      ownerState,
      children: [children ? (0, import_jsx_runtime4.jsx)(LabelSlot, {
        ...labelProps,
        className: clsx_default(classes.label, labelProps == null ? void 0 : labelProps.className),
        children
      }) : null, optional]
    })]
  });
});
true ? StepLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: import_prop_types2.default.shape({
    label: import_prop_types2.default.object
  }),
  /**
   * If `true`, the step is marked as failed.
   * @default false
   */
  error: import_prop_types2.default.bool,
  /**
   * Override the default label of the step icon.
   */
  icon: import_prop_types2.default.node,
  /**
   * The optional node to display.
   */
  optional: import_prop_types2.default.node,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    label: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    stepIcon: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    label: import_prop_types2.default.elementType,
    stepIcon: import_prop_types2.default.elementType
  }),
  /**
   * The component to render in place of the [`StepIcon`](https://mui.com/material-ui/api/step-icon/).
   * @deprecated Use `slots.stepIcon` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  StepIconComponent: import_prop_types2.default.elementType,
  /**
   * Props applied to the [`StepIcon`](https://mui.com/material-ui/api/step-icon/) element.
   * @deprecated Use `slotProps.stepIcon` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  StepIconProps: import_prop_types2.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
StepLabel.muiName = "StepLabel";
var StepLabel_default = StepLabel;

// node_modules/@mui/material/StepButton/stepButtonClasses.js
function getStepButtonUtilityClass(slot) {
  return generateUtilityClass("MuiStepButton", slot);
}
var stepButtonClasses = generateUtilityClasses("MuiStepButton", ["root", "horizontal", "vertical", "touchRipple"]);
var stepButtonClasses_default = stepButtonClasses;

// node_modules/@mui/material/StepButton/StepButton.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation],
    touchRipple: ["touchRipple"]
  };
  return composeClasses(slots, getStepButtonUtilityClass, classes);
};
var StepButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiStepButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${stepButtonClasses_default.touchRipple}`]: styles.touchRipple
    }, styles.root, styles[ownerState.orientation]];
  }
})({
  width: "100%",
  padding: "24px 16px",
  margin: "-24px -16px",
  boxSizing: "content-box",
  [`& .${stepButtonClasses_default.touchRipple}`]: {
    color: "rgba(0, 0, 0, 0.3)"
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      justifyContent: "flex-start",
      padding: "8px",
      margin: "-8px"
    }
  }]
});
var StepButton = React5.forwardRef(function StepButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepButton"
  });
  const {
    children,
    className,
    icon,
    optional,
    ...other
  } = props;
  const {
    disabled,
    active
  } = React5.useContext(StepContext_default);
  const {
    orientation
  } = React5.useContext(StepperContext_default);
  const ownerState = {
    ...props,
    orientation
  };
  const classes = useUtilityClasses3(ownerState);
  const childProps = {
    icon,
    optional
  };
  const child = isMuiElement_default(children, ["StepLabel"]) ? React5.cloneElement(children, childProps) : (0, import_jsx_runtime5.jsx)(StepLabel_default, {
    ...childProps,
    children
  });
  return (0, import_jsx_runtime5.jsx)(StepButtonRoot, {
    focusRipple: true,
    disabled,
    TouchRippleProps: {
      className: classes.touchRipple
    },
    className: clsx_default(classes.root, className),
    ref,
    ownerState,
    "aria-current": active ? "step" : void 0,
    ...other,
    children: child
  });
});
true ? StepButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * The icon displayed by the step label.
   */
  icon: import_prop_types3.default.node,
  /**
   * The optional node to display.
   */
  optional: import_prop_types3.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
var StepButton_default = StepButton;

export {
  getStepIconUtilityClass,
  stepIconClasses_default,
  StepIcon_default,
  getStepLabelUtilityClass,
  stepLabelClasses_default,
  StepLabel_default,
  getStepButtonUtilityClass,
  stepButtonClasses_default,
  StepButton_default
};
//# sourceMappingURL=chunk-7UN66Q3Y.js.map
