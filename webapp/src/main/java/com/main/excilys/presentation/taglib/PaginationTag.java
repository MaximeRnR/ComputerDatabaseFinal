package com.main.excilys.presentation.taglib;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class PaginationTag extends SimpleTagSupport {
    private int    page;
    private int    maxPage;
    private String column;
    private String search;
    private int    nbObject;

    @Override
    public void doTag() throws JspException, IOException {

        int[] listToPrint = null;
        if (maxPage < 5) {
            listToPrint = new int[maxPage + 1];
            for (int j = 0; j < maxPage + 1; j++) {
                listToPrint[j] = j + 1;
            }
        } else {
            listToPrint = new int[5];
            for (int j = -2; j < 3; j++) {
                if (page + j < 0) {
                    listToPrint[j + 2] = -(j - 2) + 1;
                } else if (page + j > maxPage) {
                    listToPrint[j + 2] = maxPage - j - 1;
                } else {
                    listToPrint[j + 2] = page + j + 1;
                }
            }
        }
        Arrays.sort(listToPrint);

        for (int element : listToPrint) {
            JspWriter out = this.getJspContext().getOut();
            out.println("<li");
            if (element - 1 == page) {
                out.println("class=active");

            }
            out.println(
                    "><a class='mini-fab mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab' href='dashboard?page="
                            + (element - 1) + "&column=" + column + "&search=" + search
                            + "&nbObject=" + nbObject + "'><span>" + element + "</span></a></li>");
        }

    }

    public void setColumn(String column) {
        this.column = column;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public void setMaxPage(int maxPage) {
        this.maxPage = maxPage;
    }

    public void setSearch(String search) {
        this.search = search;
    }

    public void setNbObject(int nbObject) {
        this.nbObject = nbObject;
    }
}
