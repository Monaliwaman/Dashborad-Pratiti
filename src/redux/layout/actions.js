import { layoutTypes } from "./actionTypes";

export const changeLayout = layout => ({
	type: layoutTypes.CHANGE_LAYOUT,
	payload: layout
});

export const changePreloader = layout => ({
	type: layoutTypes.CHANGE_PRELOADER,
	payload: layout
});

export const changeLayoutWidth = (width, layoutType) => ({
	type: layoutTypes.CHANGE_LAYOUT_WIDTH,
	payload:  { width, layoutType }
});

export const changeSidebarTheme = (theme) => {
	try {
		// Change sidebar theme from here, "light" is static for now
		changeBodyAttribute("data-sidebar", '"light');
			if(theme === "light")
			return({
				type: layoutTypes.CHANGE_SIDEBAR_THEME,
				payload: "light"
			})
			if(theme === "dark")
			return({
				type: layoutTypes.CHANGE_SIDEBAR_THEME,
				payload: "light"
			})
	} catch (error) { }

	
};

export const changeSidebarType = (sidebarType, isMobile) => {
	try {
		switch (sidebarType) {
			case "compact":
				changeBodyAttribute("data-sidebar-size", "small");
				manageBodyClass("sidebar-enable", "remove");
				manageBodyClass("vertical-collpsed", "remove");
				break;
			case "icon":
				changeBodyAttribute("data-keep-enlarged", "true");
				manageBodyClass("vertical-collpsed", "add");
				break;
			case "condensed":
				manageBodyClass("sidebar-enable", "add");
				if (!isMobile) manageBodyClass("vertical-collpsed", "add");
				break;
			default:
				changeBodyAttribute("data-sidebar-size", "");
				manageBodyClass("sidebar-enable", "remove");
				if (!isMobile) manageBodyClass("vertical-collpsed", "remove");
				break;
		}
	} catch (error) { }
	return {
		type: layoutTypes.CHANGE_SIDEBAR_TYPE,
		payload: { sidebarType, isMobile }
	};
};

export const changeTopbarTheme = topbarTheme => ({
	type: layoutTypes.CHANGE_TOPBAR_THEME,
	payload: topbarTheme
});


export const toggleRightSidebar = () => ({
	type: layoutTypes.TOGGLE_RIGHT_SIDEBAR,
	payload: null
});

export const showRightSidebar = () => ({
	type: layoutTypes.SHOW_RIGHT_SIDEBAR,
	payload: null
});

export const hideRightSidebar = () => ({
	type: layoutTypes.HIDE_RIGHT_SIDEBAR,
	payload: null
});

// Confirm
export const openConfirmModel = (payload) => ({
	type: layoutTypes.CONFIRM_MODEL_ON,
	payload
});

export const closeConfirmModel = () => ({
	type: layoutTypes.CONFIRM_MODEL_OFF,
	payload: false,
});

/**
 * Changes the body attribute
 */
 function changeBodyAttribute(attribute, value) {
	if (document.body) document.body.setAttribute(attribute, value);
	return true;
}

function manageBodyClass(cssClass, action = "toggle") {
	switch (action) {
		case "add":
			if (document.body) document.body.classList.add(cssClass);
			break;
		case "remove":
			if (document.body) document.body.classList.remove(cssClass);
			break;
		default:
			if (document.body) document.body.classList.toggle(cssClass);
			break;
	}

	return true;
}
