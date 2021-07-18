import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import SideNavBar, {
  SideNavBarKeys,
  OverflowTypes,
} from '../../src/components/SideNavBar';

describe('SideNavBar', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SideNavBar pageKey={SideNavBarKeys.trademark} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should set the a single page as active', () => {
    const { container } = render(
      <SideNavBar pageKey={SideNavBarKeys.releases} />
    );
    const innrerHtml = container.innerHTML;
    const activeLinks = innrerHtml.match('side-nav__item-community--active');
    expect(activeLinks.length).toBe(1);
  });

  it('should set the body overflow hidden on menu click', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.releases} />);
    const downloadItem: Element = screen.getAllByRole('button')[0] as Element;
    expect(document.body.style.overflow).toBe(OverflowTypes.unset);
    fireEvent.click(downloadItem);
    expect(document.body.style.overflow).toBe(OverflowTypes.hidden);
  });

  it('should set the body overflow hidden/unset on toggling', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.releases} />);
    const downloadItem: Element = screen.getAllByRole('button')[0] as Element;
    expect(document.body.style.overflow).toBe(OverflowTypes.unset);
    fireEvent.click(downloadItem);
    expect(document.body.style.overflow).toBe(OverflowTypes.hidden);
    fireEvent.click(downloadItem);
    expect(document.body.style.overflow).toBe(OverflowTypes.unset);
    fireEvent.click(downloadItem);
    expect(document.body.style.overflow).toBe(OverflowTypes.hidden);
    fireEvent.click(downloadItem);
    expect(document.body.style.overflow).toBe(OverflowTypes.unset);
  });

  it('should contain a href to `~/about`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.about} />);
    const aboutNavBarElement = screen.getByText('About');
    expect(aboutNavBarElement.getAttribute('href')).toBe('/about');
  });

  it('should contain a href to `~/governance`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.governance} />);
    const governanceNavBarElement = screen.getByText('Project Governance');
    expect(governanceNavBarElement.getAttribute('href')).toBe('/governance');
  });

  it('should contain a href to `~/community`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.community} />);
    const communityNavBarElement = screen.getByText('Community');
    expect(communityNavBarElement.getAttribute('href')).toBe('/community');
  });

  it('should contain a href to `~/working-groups`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.workingGroups} />);
    const workingGroupsNavBarElement = screen.getByText('Working Groups');
    expect(workingGroupsNavBarElement.getAttribute('href')).toBe(
      '/working-groups'
    );
  });

  it('should contain a href to `~/releases`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.releases} />);
    const releasesNavBarElement = screen.getByText('Releases');
    expect(releasesNavBarElement.getAttribute('href')).toBe('/releases');
  });

  it('should contain a href to `~/resources`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.resources} />);
    const resourcesNavBarElement = screen.getByText('Resources');
    expect(resourcesNavBarElement.getAttribute('href')).toBe('/resources');
  });

  it('should contain a href to `~/trademark`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.trademark} />);
    const trademarkNavBarElement = screen.getByText('Trademark Policy');
    expect(trademarkNavBarElement.getAttribute('href')).toBe('/trademark');
  });

  it('should contain a href to `~/privacy`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.privacy} />);
    const privacyNavBarElement = screen.getByText('Privacy Policy');
    expect(privacyNavBarElement.getAttribute('href')).toBe('/privacy');
  });

  it('should contain a href to `~/security`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.security} />);
    const securityNavBarElement = screen.getByText('Security Reporting');
    expect(securityNavBarElement.getAttribute('href')).toBe('/security');
  });

  it('should contain a href to `~/package-manager`', () => {
    render(<SideNavBar pageKey={SideNavBarKeys.packageManager} />);
    const packageManagerNavBarElement = screen.getByText('Package Manager');
    expect(packageManagerNavBarElement.getAttribute('href')).toBe(
      '/download/package-manager'
    );
  });
});
