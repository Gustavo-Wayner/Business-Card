let checkbox = document.getElementById("check")
let root = document.documentElement;

let dark_mode = {
    bg_col: root.style.getPropertyValue("--bg_col"),
    card_top_col: root.style.getPropertyValue("--card_top_col"),
    card_bottom_col: root.style.getPropertyValue("--card_bottom_col"),
    
    text_col: root.style.getPropertyValue("--text_col"),
    muted_text_col: root.style.getPropertyValue("--muted_text_col"),
    
    border_col: root.style.getPropertyValue("--border_col"),
    gh_fill: root.style.getPropertyValue("--gh_fill"),
    pfp_fill: root.style.getPropertyValue("--pfp_fill")
}

let light_mode = {
    bg_col: 'rgb(245, 247, 250)',
    card_top_col: 'rgba(102, 155, 236, 1)',
    card_bottom_col: 'rgb(255, 255, 255)',
    
    text_col: 'rgb(24, 28, 36)',
    muted_text_col: 'rgb(92, 102, 112)',
    
    border_col: 'rgb(216, 222, 230)',
    gh_fill: 'rgb(11, 15, 22)',
    pfp_fill: 'rgb(11, 15, 22)'
}
let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(!isDarkMode)
{
    checkbox.checked = true;
    root.style.setProperty("--bg_col", light_mode.bg_col);
    root.style.setProperty("--card_top_col", light_mode.card_top_col);
    root.style.setProperty("--card_bottom_col", light_mode.card_bottom_col);
    
    root.style.setProperty("--text_col", light_mode.text_col);
    root.style.setProperty("--muted_text_col", light_mode.muted_text_col);

    root.style.setProperty("--border_col", light_mode.border_col);
    root.style.setProperty("--gh_fill", light_mode.gh_fill);
    root.style.setProperty("--pfp_fill", light_mode.pfp_fill);
}

function CheckUncheck()
{
    if(!isDarkMode)
    {
        root.style.setProperty("--bg_col", dark_mode.bg_col);
        root.style.setProperty("--card_top_col", dark_mode.card_top_col);
        root.style.setProperty("--card_bottom_col", dark_mode.card_bottom_col);
        
        root.style.setProperty("--text_col", dark_mode.text_col);
        root.style.setProperty("--muted_text_col", dark_mode.muted_text_col);

        root.style.setProperty("--border_col", dark_mode.border_col);
        root.style.setProperty("--gh_fill", dark_mode.gh_fill);
        root.style.setProperty("--pfp_fill", dark_mode.pfp_fill);
    }
    else
    {
        root.style.setProperty("--bg_col", light_mode.bg_col);
        root.style.setProperty("--card_top_col", light_mode.card_top_col);
        root.style.setProperty("--card_bottom_col", light_mode.card_bottom_col);
        
        root.style.setProperty("--text_col", light_mode.text_col);
        root.style.setProperty("--muted_text_col", light_mode.muted_text_col);

        root.style.setProperty("--border_col", light_mode.border_col);
        root.style.setProperty("--gh_fill", light_mode.gh_fill);
        root.style.setProperty("--pfp_fill", light_mode.pfp_fill);
    }

    isDarkMode = !isDarkMode;
}

checkbox.addEventListener("change", CheckUncheck)